import "./UserComponent.css"

export default function UserComponent({user}) {
      return (
        <div className="User">
            <div>
                <h2>User</h2>
                <div>id:{user.id}</div>
                <div>name:{user.name}</div>
                <div>username:{user.username}</div>
                <div>email:{user.email}</div>
                <div className="address">
                    address:
                    <div>street:{user.address.street}</div>
                    <div>suite:{user.address.suite}</div>
                    <div>city:{user.address.city}</div>
                    <div>zipcode:{user.address.zipcode}</div>
                    <div className="geo">
                        geo:
                        <div>lat:{user.address.geo.lat}</div>
                        <div>lng:{user.address.geo.lng}</div>
                    </div>
                </div>
                <div>phone:{user.phone}</div>
            </div>
        </div>

    )
}