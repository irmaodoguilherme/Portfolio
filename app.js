const worksButton = document.querySelector('button#works')

const showWorksSection = () => {
    scrollTo(0, 136)
}

worksButton.addEventListener('click', showWorksSection)