xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  sitemap.resources.each do |resource|
    if resource.destination_path =~ /\.html$/
      unless resource.destination_path =~ /404/
      "#{resource.url}"
      xml.url do
        xml.loc "#{site_url}#{resource.url}"
        xml.lastmod File.mtime(resource.source_file).strftime('%Y-%m-%d')
        xml.priority (1.1 - resource.url.count("/") * 0.1).round(1).to_s
        xml.changefreq "daily"
      end
      end
    end
  end
end
