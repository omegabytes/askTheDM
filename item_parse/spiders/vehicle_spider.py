import scrapy

class ItemSpider(scrapy.Spider):
    name = "items"
    allowed_domains = ["https://github.com/eepMoody/open5e/blob/master/source/equipment/armor.rst"]
    start_urls = [
    "https://github.com/eepMoody/open5e/blob/master/source/equipment/mounts-and-vehicles.rst",
    ]

    def parse(self, response):
        null = None
        for line in response.css('tr'):
            if(line.xpath('td[4]/text()').extract_first()!=null):
                item_type = 'Mount'
            else:
                item_type = 'Waterborne'
                
            yield{
                'name' : line.xpath('td[1]/text()').extract_first(),
                'cost' : line.xpath('td[2]/text()').extract_first(),
                'speed' : line.xpath('td[3]/text()').extract_first(),
                'carry capacity' : line.xpath('td[4]/text()').extract_first(),
                'catagory' : 'Vehicles',
                'item type' : item_type
            } 