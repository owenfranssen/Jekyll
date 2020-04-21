require 'json'

class BootstrapColumn < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    @input = input
  end

  def render(context)

    # Set defaults first, replace with your values!
    # {% ads {"adclient":"ca-pub-00000000000000", "adslot":"555555555"} %}
    # adclient = "ca-pub-6090633128205734"
    # adslot = "yyyyy"
    
    small = "col"
    medium = ""
    large = ""

    # Attempt to parse the JSON if any is passed in
    begin
      if( !@input.nil? && !@input.empty? )
        jdata = JSON.parse(@input)
        if( jdata.key?("sm") )
          small = jdata["sm"].strip
          if(small != "")
            small = "col-#{small}"
          end
        end
        if( jdata.key?("md") )
          medium = jdata["md"].strip
          if(medium != "")
            medium = " col-md-#{medium}"
          end
        end
        if( jdata.key?("lg") )
          large = jdata["lg"].strip
          if(large != "")
            large = " col-lg-#{large}"
          end
        end
        # adslot = jdata["adslot"].strip
        classes = @input.downcase.split('|').join(' ').strip
      end
    rescue
    end
    
    if(small == "col" && (medium != "" || large != ""))
      small = "col-12"
    end
    
    # Write the output HTML string    
    output = "<div class=\"#{small}#{medium}#{large}\" markdown=\"1\">"

    # Render it on the page by returning it
    return output;
  end
end
Liquid::Template.register_tag('col', BootstrapColumn)

class BootstrapColumnBreak < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    @input = input
  end

  def render(context)
    classes = @input.downcase.split('|').join(' ').strip
        
    # Write the output HTML string    
    output = "<div class=\"w-100 #{classes}\"></div>"

    # Render it on the page by returning it
    return output;
  end
end
Liquid::Template.register_tag('col_break', BootstrapColumnBreak)

###! End Tag ###
class BootstrapEndTag < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    @input = input
  end

  def render(context)
    
    tag = "div"

    # Attempt to parse the JSON if any is passed in
    begin
      if( !@input.nil? && !@input.empty? )
        jdata = JSON.parse(@input)
        if( jdata.key?("tag") )
          tag = jdata["tag"].strip
        end
      end
    rescue
    end
    
    # Write the output HTML string    
    output = "</#{tag}>"

    # Render it on the page by returning it
    return output;
  end
end
Liquid::Template.register_tag('bs_end', BootstrapEndTag)
Liquid::Template.register_tag('col_end', BootstrapEndTag)
