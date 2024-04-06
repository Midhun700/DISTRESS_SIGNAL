document.addEventListener('DOMContentLoaded', () => {
  const sendSignalBtn = document.getElementById('sendSignalBtn');

  sendSignalBtn.addEventListener('click', async () => {
      try {
          // Send POST request to http://localhost:3000/ to send push notification
          const response = await fetch('http://localhost:3000/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'text/plain'
              },
              body: 'Distress signal received'
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
