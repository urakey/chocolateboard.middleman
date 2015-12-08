xml.instruct!

xml.rss "version" => "2.0", "xmlns:atom" => "http://www.w3.org/2005/Atom", "xmlns:dc" => "http://purl.org/dc/elements/1.1/", "xmlns:content" => "http://purl.org/rss/1.0/modules/content/", "xmlns:creativeCommons" => "http://backend.userland.com/creativeCommonsRSSModule" do
  xml.channel do
    xml.title site_title
    xml.link URI.join(site_url, blog.options.prefix.to_s)
    xml.description site_subtitle
    xml.language "ja-JP"
    xml.managingEditor "akey@chocolateboard.net (Aki Fukayama)"
    xml.atom :link, :rel => "self", :href => URI.join(site_url, current_page.path)
    xml.atom :link, :rel => "hub", :href => "https://pubsubhubbub.appspot.com/"
    xml.generator "https://middlemanapp.com/"
    xml.creativeCommons :license, "http://creativecommons.org/licenses/by-nc/4.0/"
    xml.lastBuildDate (blog.articles.first.date.to_time.strftime('%a, %d %b %Y %H:%M:%S %z')) unless blog.articles.empty?

    blog.articles[0..20].each do |article|
      xml.item do
        xml.title article.title
        xml.link URI.join(site_url, article.url)
        xml.pubDate File.mtime(article.source_file).strftime('%a, %d %b %Y %H:%M:%S %z')
        xml.description do
          xml.cdata! strip_tags(article.summary.gsub(/(\r\n|\r|\n|\f)/,""))
        end
        xml.dc :creator, site_author
        xml.category article.data.category
        article.tags.each do |tag|
          xml.category tag
        end
        xml.guid URI.join(site_url, article.url), :isPermaLink => "true"
        xml.content :encoded do
          xml.cdata! article.body.gsub(/src="\/assets\/images/, "src=\"#{site_url}/assets/images")
        end
      end
    end
  end
end
