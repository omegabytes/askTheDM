import scrapy

class ItemSpider(scrapy.Spider):
    name = "items"
    allowed_domains = ["https://github.com/eepMoody/open5e/blob/master/source/equipment/armor.rst"]
    start_urls = [
    "https://github.com/eepMoody/open5e/blob/master/source/equipment/armor.rst",
    ]

    def parse(self, response):
        null = None
        for line in response.css('tr'):
            if(line.xpath('td[1]/text()').extract_first()==null or line.xpath('td[4]/text()').extract_first()==null):
                armor_type = line.xpath('td/em/text()').extract_first()
            else:
                yield{
                    'name' : line.xpath('td[1]/text()').extract_first(),
                    'cost' : line.xpath('td[2]/text()').extract_first(),
                    'weight' : line.xpath('td[6]/text()').extract_first(),
                    'stealth' : line.xpath('td[5]/text()').extract_first(),
                    'catagory' : 'Armor',
                    'armor class' : line.xpath('td[3]/text()').extract_first(),
                    'strength' : line.xpath('td[4]/text()').extract_first(),
                    'armor type' : armor_type
                } 