const noteTextArea = document.getElementById('note');
const savePdfButton = document.getElementById('save-pdf');
const saveWordButton = document.getElementById('save-word');

savePdfButton.addEventListener('click', () => {
    try {
        const noteText = noteTextArea.value;
        const docDefinition = {
            content: noteText,
        };
        pdfMake.createPdf(docDefinition).download('note.pdf');
        console.log('PDF saved successfully');
    } catch (error) {
        console.error('Error saving PDF:', error);
    }
});

saveWordButton.addEventListener('click', () => {
    try {
        const noteText = noteTextArea.value;
        const blob = new Blob([noteText], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'note.doc';
        link.click();
        console.log('Word document saved successfully');
    } catch (error) {
        console.error('Error saving Word document:', error);
    }
});