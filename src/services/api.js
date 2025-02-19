export const calculateTime = async ({ start_time, end_time }) => {
    try {
        // Make the POST request to the API
        const response = await fetch('http://127.0.0.1:8000/api/tcapp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Ensure JSON content type
            },
            body: JSON.stringify({
                start_date: start_time,
                end_date: end_time,
            }),
        });

        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Failed to calculate time');
        }

        // Parse the JSON response
        const data = await response.json();

        // Optionally validate the data before returning
        if (data && data.result) {
            return data;
        } else {
            throw new Error('Unexpected response structure');
        }

    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error:', error);
        throw error;  // Re-throw the error for higher-level handling
    }
};
