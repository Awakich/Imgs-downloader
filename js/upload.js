export function upload(selector, options = {}){
    const input = document.querySelector(selector);

    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('primary')
    button.textContent = 'upload'

    if(options.multi){
        input.setAttribute('multiple', true)
    }

    if (options.accept && Array.isArray(options.accept)){
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', button)
    
    const handler = event =>{
        if (!event.target.files.length){
            return;
        }
        const files = Array.from(event.target.files)

        files.forEach(file =>{
            if (!file.type.match('image')){
                return;
            }
            const reader = new FileReader()

            reader.onload = event => {
                console.log(event.target.result)
                input.insertAdjacentHTML('afterend', `<img src="${event.target.result}" />`)
            }

            reader.readAsDataURL(file)
        })
    }

    button.addEventListener('click', () => input.click())
    input.addEventListener('change', handler)
}