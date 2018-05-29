package mongo_db.DAO;

import org.bson.types.ObjectId;

public class ChangeStatusReqBody
{
    private ObjectId id;
    private boolean isPublic;
    private Long userID;

    public ChangeStatusReqBody(){}

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }
}
