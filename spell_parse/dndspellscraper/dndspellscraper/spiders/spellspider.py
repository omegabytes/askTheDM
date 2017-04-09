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
    name = "spellcrawler"
    # Since you're automating traversal, set an allowable domain so
    # your crawspider doesn't feel the need to break off the website.
    allowed_domains = ["www.dnd-spells.com"]
    # Starting points for your spider to crawl from.
    start_urls = (
    "https://www.dnd-spells.com/spells",
    )

    # Define rules for the spider to /crawl/
    rules = (Rule(LinkExtractor(allow=(r'.\/spell\/.')),
                  # the callback for the pages the spider crawls.
                  callback="parse_page",
                  # follow links?
                  follow=True),
            )

    # This is the function that will run on every url response in the
    # the crawlSpider's 'path'.
    def parse_page(self, response):
        name = response.xpath('//*[@id="content"]/div/div/div/div/h1/span/text()').extract_first()
        intro = ''
        spellclass = response.xpath('//*[@id="content"]/div/div/div/div/p[1]/text()').extract_first()
        level = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[1]/text()').extract_first()
        casting_time = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[2]/text()').extract_first()
        spellrange = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[3]/text()').extract_first()
        components = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[4]/text()').extract_first()
        duration = response.xpath('//*[@id="content"]/div/div/div/div/p[2]/strong[5]/text()').extract_first()
        description = ''
        # source = response.xpath('//*[@id="content"]/div/div/div/div/p[6]/text()').extract_first()
        source = ''
        url = response.url
        print "===================================================="
        print "Spell: %s" % name
        print "Spell class: %s" % spellclass
        print "Spell Level: %s" % level
        print "Casting Time: %s" % casting_time
        print "Spell Range: %s" % spellrange
        print "Components: %s" % components
        print "Duration: %s" % duration
        print "Description: %s" % description
        print "Source: %s" % source
        print "===================================================="
        yield {
            'name' : name,
            'intro' : intro,
            'spellclass' : spellclass,
            'level' : level,
            'casting_time' : casting_time,
            'spellrange' : spellrange,
            'components' : components,
            'duration' : duration,
            'description' : description,
            'source' : source,
            'url' : url
            }
