module Jekyll
  class IcsPost < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'ics-calendar-event.md')
      self.data['category'] = category

      category_title_prefix = site.config['category_title_prefix'] || 'Category: '
      self.data['title'] = "#{category_title_prefix}#{category}"
    end
  end
  
  # Generates a new post for each existing event
  class IcsGenerator < Generator
    safe true
    def generate(site)
      events = site.config['collections']['events'] || []
      dir = site.config['icsdir'] || 'ics'
      site.config['collections']['events'].each do |event|
        index = IcsPost.new(site, site.source, File.join(dir, 'x'), event)
        index.render(site.layouts, site.site_payload)
        index.write(site.dest)
        site.pages << index
      end
    end
  end
end
