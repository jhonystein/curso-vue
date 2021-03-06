module.exports = {
    lang: 'pt-BR',
    ga: 'UA-134641181-1',
    plugins: [
        '@vuepress/pwa',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-134641181-1'
            }
        ],
    ],
    title: 'Curso Vue',
    description: 'Aprenda Vuejs, de graça, mesmo!',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Curso', link: '/c1' },
            { text: 'Autor', link: 'http://www.danielschmitz.com.br' },
            { text: 'Github', link: 'https://github.com/danielschmitz/curso-vue' },
        ],
        sidebar:
            ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'a1']

    },
    markdown: {
        lineNumbers: true,
        includeLevel: [1, 2, 3, 4] 
    }

}