# Translate only local page routes. Assets, external links, and already localized
# routes stay unchanged. Query strings and section fragments are preserved.
module Jekyll
  module LocalizationFilter
    def localized_url(input, language = 'en')
      path = input.to_s
      return path unless language == 'zh-CN'
      return path unless path.start_with?('/')
      return path if path.start_with?('//', '/assets/', '/zh/')
      "/zh#{path}"
    end
  end
end
Liquid::Template.register_filter(Jekyll::LocalizationFilter)
