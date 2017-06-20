import scrapy

class ItemSpider(scrapy.Spider):
    name = "items"
    allowed_domains = ["https://github.com/eepMoody/open5e/blob/master/source/equipment"]
    start_urls = [
    "https://github.com/eepMoody/open5e/blob/master/source/equipment/adventuring-gear.rst",
    ]

    def parse(self, response):
        null = None
        #item_type = null
        for line in response.css('tr'):
            if(line.xpath('td[1]/text()').extract_first()==null):
                item_type = line.xpath('td/em/text()').extract_first()
            else:
                yield{
                    'name' : line.xpath('td[1]/text()').extract_first(),
                    'cost' : line.xpath('td[2]/text()').extract_first(),
                    'weight' : line.xpath('td[3]/text()').extract_first(),
                    'catagory' : 'Adventure Gear',
                    'itemType' : item_type
                } 