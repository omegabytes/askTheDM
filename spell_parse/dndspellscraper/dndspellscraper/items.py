# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class SpellItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = scrapy.Field()
    intro = scrapy.Field()
    spellclass = scrapy.Field()
    level = scrapy.Field()
    casting_time = scrapy.Field()
    spellrange = scrapy.Field()
    components = scrapy.Field()
    duration = scrapy.Field()
    description = scrapy.Field()
    source = scrapy.Field()
    url = scrapy.Field()
