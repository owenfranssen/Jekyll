class Jekyll::Converters::Markdown::MyKramdown

      def matches(ext)
        ext =~ /^\.(html|md|markdown)$/i
      end

      def output_ext(ext)
        ".html"
      end

      def convert(content)
        site = Jekyll::Site.new(@config)
        $mkconverter = site.find_converter_instance(Jekyll::Converters::Markdown::KramdownParser)

        if !content.nil?
          content = customStuff
        end

        #$mkconverter.convert(content)
        Kramdown::Document.new(content, Jekyll::Utils.symbolize_hash_keys(@config['kramdown'])).to_html5
      end
      
      def customStuff(content)
        # custom processing here...

        content
      end
end