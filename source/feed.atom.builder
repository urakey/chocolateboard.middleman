xml.instruct!

xml.feed "xmlns" => "http://www.w3.org/2005/Atom", "xml:lang" => "ja" do
  xml.id URI.join(site_url, blog.options.prefix.to_s)
  xml.title site_title, :type => "text"
  xml.subtitle site_description, :type => "text"
  xml.link :rel => "self", :href => URI.join(site_url, current_page.path)
  xml.link :rel => "hub", :href => "https://pubsubhubbub.appspot.com/"
  xml.link :rel => "license", :href => "http://creativecommons.org/licenses/by-nc/4.0/"
  xml.generator "Middleman", :uri => "https://middlemanapp.com/"
  xml.author do
    xml.name site_author
    xml.uri site_url
    xml.email "akey@chocolateboard.net"
  end
  xml.updated (blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?

  blog.articles[0..20].each do |article|
    xml.entry do
      xml.id URI.join(site_url, article.url)
      xml.title article.title
      xml.link :rel => "alternate", :href => URI.join(site_url, article.url)
      xml.updated File.mtime(article.source_file).iso8601
      xml.published article.date.to_time.iso8601
      xml.author { xml.name site_author }
      xml.category :scheme => site_url, :term => article.data.category
      article.tags.each do |tag|
        xml.category :scheme => site_url, :term => tag
      end
      xml.summary :type => "html" do
        xml.cdata! strip_tags(article.summary.gsub(/(\r\n|\r|\n|\f)/,""))
      end
      xml.content :type => "html" do
        xml.cdata! article.body.gsub(/src="\/assets\/images/, "src=\"#{site_url}/assets/images")
      end
    end
  end
end
