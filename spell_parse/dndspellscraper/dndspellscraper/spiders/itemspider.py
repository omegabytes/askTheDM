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
from ..items import SpellItem

# this is the actual spider
class SpellSpider(CrawlSpider):
    # Name the spider, you'll use this to call it for initialization.
    name = "itemcrawler"
    # Since you're automating traversal, set an allowable domain so
    # your crawspider doesn't feel the need to break off the website.
    allowed_domains = ["https://www.dandwiki.com"]
    # Starting points for your spider to crawl from.
    start_urls = (
    "https://www.dandwiki.com/wiki/5e_SRD:Weapons",
    )

    # Define rules for the spider to /crawl/
    rules = (Rule(LinkExtractor(allow=(r'.\/items\/.')),
                  # the callback for the pages the spider crawls.
                  callback="parse_page",
                  # follow links?
                  follow=True),
            )

    # This is the function that will run on every url response in the
    # the crawlSpider's 'path'.
    def parse_page(self, response):
        catagory = 'Weapon'
        damage = response.xpath('//*[@id="bodyContent"]/div/table/tbody/tr/td[3]/text()').extract_first()
        cost = response.xpath('//*[@id="bodyContent"]/div/table/tbody/tr/td[2]/text()').extract_first()
        #description = response.xpath('//*[@id="bodyContent"]/div/table/tbody/tr/td[1]/text()').extract_first()
        #armor_class = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[1]/text()').extract_first()
        #strength = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[2]/text()').extract_first()
        #armor_type = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[3]/text()').extract_first()
        #weight = response.xpath('//*[@id="bodyContent"]/div/table/tbody/tr/td[1]/text()').extract_first()
        #properties = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[5]/text()').extract_first()
        #capacity = ''
        #speed = ''
        #quality = ''
        #dice roll = ''
        name = response.xpath('//*[@id="bodyContent"]/div/h2/text()').extract_first()

        print "===================================================="
        print "Name: %s" % name
        print "Damage: %s" % damage
        print "Cost: %s" % cost
        print "Catagory: %s" % catagory
        print "===================================================="
        yield {
            'name' : name,
            'damage' : damage,
            'cost' : cost,
            'catagory' : catagory
            }
