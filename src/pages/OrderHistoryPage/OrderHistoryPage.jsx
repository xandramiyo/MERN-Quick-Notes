

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            
        </>
    )
}