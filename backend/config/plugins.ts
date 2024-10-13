export default () => ({
    // Other plugin configurations can go here
    'ckeditor': {
        enabled: true,
        config: {
            // CKEditor configuration options
            // You can customize it based on your requirements
            toolbar: [
                'heading', '|',
                'bold', 'italic', 'link', '|',
                'bulletedList', 'numberedList', '|',
                'blockQuote', 'insertTable', '|',
                'undo', 'redo'
            ],
        
        },
    },
});
