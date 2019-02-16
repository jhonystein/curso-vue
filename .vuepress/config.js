module.exports = {
    base: '/mini-curso-vue/',
    lang: 'pt-BR',
    plugins: [
        '@vuepress/pwa',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-134641181-1'
            }
        ], 
    ],
    title: 'Mini Curso Vue',
    description: 'Aprenda Vuejs, de graça!',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Curso', link: '/c1' },
            { text: 'Autor', link: 'http://www.danielschmitz.com.br' },
            { text: 'Github', link: 'https://github.com/danielschmitz/mini-curso-vue' },
        ],
        sidebar:
            ['c1', 'c2', 'c3', 'c4', 'c5']

    }

}