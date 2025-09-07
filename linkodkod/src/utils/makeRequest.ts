export default async function makeRequest(url: string, method: string = 'GET', body: unknown = null) {
    try {
        const options: RequestInit = {
            method,
            headers: { 'Content-Type': 'application/json' }
        };

        if (body) options.body = JSON.stringify(body);

        await new Promise(resolve => setTimeout(resolve, 500))

        const res = await fetch(`http://localhost:3000${url}`, options);

        if (!res.ok) {
            const errText = await res.text();
            return (errText);
        }

        const contentType = res.headers.get('Content-Type');
        return contentType && contentType.includes('application/json')
            ? await res.json()
            : await res.text();

    } catch (err: any) {
        return (err.message);
    }
}
