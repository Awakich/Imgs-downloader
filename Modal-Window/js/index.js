const modal = $.modal({
    title: 'My modal',
    closeable: true,
    content:`<h3>Modal wind ow</h3>`,
    width: '400px',
    footerButtons:[
        {text: 'Accept', type:'primary', handler(){
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type:'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})
