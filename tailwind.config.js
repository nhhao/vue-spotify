module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Mulish'],
        },
        extend: {
            colors: {
                playBar: '#181818',
                mainPage: '#121212',
                selected: '#282828',
                'name-section': '#0c0a0a',
                'not-selected': '#b2b2b2',
                'name-hover': '#282828',
                'progress-bar': '#d2d2d2',
                brand: '#2ab859',
            },
        },
    },
    variants: {
        extend: {
            display: ['hover', 'group-hover'],
        },
    },
    plugins: [],
}
