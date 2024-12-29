export default function User({ usuario }) {
    return (
        <>
            <div className="user-container">
                <p>Nome: <strong>{usuario.firstName} {usuario.lastName}</strong></p>
            </div>
        </>
    )
}