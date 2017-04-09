#!/user/bin/python
# -*- coding: utf-8 -*-
#------------------------------------------------------------------------------
# spell_spider.py
#------------------------------------------------------------------------------
# Spider for scraping spells from dnd-spells.com, modified
# from roomjack at https://github.com/KadynCBR/roomjack
#------------------------------------------------------------------------------
# Author: Kadyn Martinez (kadyn_martinez@hotmail.com)
#------------------------------------------------------------------------------
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

# this is the actual spider
class SpellSpider(CrawlSpider):
    # Name the spider, you'll use this to call it for initialization.
    name = "spellspider"
    # Since you're automating traversal, set an allowable domain so
    # your crawspider doesn't feel the need to break off the website.
    allowed_domains = ["www.dnd-spells.com/"]
    # Starting points for your spider to crawl from.
    start_urls = (
    "https://www.dnd-spells.com/spells",
    )

    # Define rules for the spider to /crawl/
    rules = (Rule(LinkExtractor(allow=(),
                                # The link extractor can only follow links based
                                # on these xpath expresions.
                                restrict_xpaths=('//a[@class="button next"]',)), #TODO: Set this to follow links in table data
                  # the callback for the pages the spider crawls.
                  callback="parse_page",
                  # follow links?
                  follow=True),
            )

    # This is the function that will run on every url response in the
    # the crawlSpider's 'path'.
    def parse_page(self, response):
        # define the data you're searching for in xpath expression
        room_listings = response.xpath('//li[@class="result-row"]')
        # This variable now contains all the listings on the page response.
        # Note: it just's still html, just now every element starts at the
        # beginning of each "result-row" root.

        # iterate through rooms in the listings, again, room contains
        # a block of html.
        for room in room_listings:
            # here we grab the data we want from the room html.

            # NOTE: extract() returns a list, so you'll want to specify the
            #       element you want.
            #       otherwise use extract_first
            listing_name = room.xpath('p/a/text()').extract()[0]
            listing_price = room.xpath(
            'p/span[2]/span[1]'
            ).extract()
            listing_date = room.xpath('p/time/@datetime').extract_first()
            # This appends the start url
            listing_detail_link = self.allowed_domains[0] +\
                                  room.xpath('p/a/@href').extract_first()
            # At this point you've gotten every room. You can do what you want
            # with the data, or yield it so you can easily output it to json.
            yield {
                'name' : listing_name,
                'price': listing_price,
                'date' : listing_date,
                'link' : listing_detail_link,
                'src'  : response.url
}
