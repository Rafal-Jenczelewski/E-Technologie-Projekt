package mongo_db.DAO;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class Marker {

    @Id
    private ObjectId id;
    private String name;
    private Long ownerID;
    private String description;
    private Boolean isPublic;
    private Coordinates coordinate;


    //For GSON
    public Marker(){}

    public Marker(Double longitude, Double latitude, String name, String description, Boolean isPublic, Long ownerID) {
        super();
        coordinate = new Coordinates(latitude, longitude);
        this.name = name;
        this.description = description;
        this.isPublic = isPublic;
        this.ownerID = ownerID;
    }

    public String getId() {
        return id.toHexString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }

    public Coordinates getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(Coordinates coordinate) {
        this.coordinate = coordinate;
    }

    public Long getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(Long ownerID) {
        this.ownerID = ownerID;
    }
}
