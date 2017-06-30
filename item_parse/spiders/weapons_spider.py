import scrapy

class ItemSpider(scrapy.Spider):
    name = "items"
    allowed_domains = ["https://github.com/eepMoody/open5e/blob/master/source/equipment/weapons.rst"]
    start_urls = [
    "https://github.com/eepMoody/open5e/blob/master/source/equipment/weapons.rst",
    ]

    def parse(self, response):
        null = None
        for line in response.css('tr'):
            if(line.xpath('td[1]/text()').extract_first()==null):
                weapon_type = line.xpath('td/em/text()').extract_first()
            else:
                yield{
                    'name' : line.xpath('td[1]/text()').extract_first(),
                    'cost' : line.xpath('td[2]/text()').extract_first(),
                    'damage' : line.xpath('td[3]/text()').extract_first(),
                    'weight' : line.xpath('td[4]/text()').extract_first(),
                    'properties' : line.xpath('td[5]/text()').extract_first(),
                    'catagory' : 'Weapon',
                    'weapon type' : weapon_type
                } 