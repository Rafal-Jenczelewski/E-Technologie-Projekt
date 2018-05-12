package mongo_db;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class Marker {

    @Id
    private String id;
    private String name;
    private Boolean owned;
    private String description;
    private Boolean isPublic;
    private Coordinates coordinate;

    //For GSON
    public Marker(){}

    public Marker(Double longitude, Double latitude, String name, Boolean owned, String description, Boolean isPublic) {
        super();
        coordinate = new Coordinates(latitude, longitude);
        this.name = name;
        this.owned = owned;
        this.description = description;
        this.isPublic = isPublic;
    }

    public String getId() {
        return id.toString();
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getOwned() {
        return owned;
    }

    public void setOwned(Boolean owned) {
        this.owned = owned;
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
}
