const Feed = () => {
  const baseUrlArticles = "https://eggsy.xyz/blog"

  const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
  }

  const { $content } = require("@nuxt/content")

  const createFeedArticles = async function (feed: any) {
    feed.options = {
      title: "EGGSY's Blog",
      description:
        "EGGSY'nin günlük hayattan, tecrübelerinden bahsettiği, göstermek veya anlatmak istediği şeyleri daha düzenli ve profesyonel bir şekilde tuttuğu blog sayfası.",
      link: baseUrlArticles,
    }

    const articles = await $content().fetch()

    articles.forEach((article: any) => {
      const url = `${baseUrlArticles}/gonderi/${article.slug}`
      const postImagesPath = "https://eggsy.xyz/assets/images/posts"

      feed.addItem({
        title: article.title,
        slug: article.slug,
        link: url,
        image: article.image
          ? `${postImagesPath}/${article.image}`
          : `${postImagesPath}/${url?.toString().split("/")?.at(-1)}.jpg`,
        date: new Date(article.createdAt),
        description: article.description,
        content: article.summary,
      })
    })
  }

  return Object.values(feedFormats).map(({ file, type }) => ({
    path: `${file}`,
    type: type,
    create: createFeedArticles,
  }))
}


export default Feed
