document.addEventListener('DOMContentLoaded', () => {
    const sendSignalBtn = document.getElementById('sendSignalBtn');

    sendSignalBtn.addEventListener('click', async () => {
        try {
            const timestamp = new Date().toLocaleString(); // Get current date and time
            const data = `Distress signal is received at ${timestamp}`; // Construct data string

            // Send POST request to http://localhost:3000/
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: data
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
