document.addEventListener('DOMContentLoaded', () => {
    const sendSignalBtn = document.getElementById('sendSignalBtn');

    sendSignalBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3000/distress', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to send distress signal.');
            }

            const result = await response.text();
            alert(result); // Display response message
        } catch (error) {
            console.error(error);
            alert('Error sending distress signal.');
        }
    });
});
