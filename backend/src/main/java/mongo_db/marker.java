package mongo_db;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class marker {

    @Id
    private String id;
    private String name;
    private Boolean owned;
    private String description;
    private Boolean isPublic;
    private Double longitude;
    private Double latitude;
    private Double [] coordinate = {longitude, latitude};

    public marker(){
    }

    public marker(Double longitude,Double latitude, String name, Boolean owned, String description, Boolean isPublic) {
        super();
        this.coordinate[0] = longitude;
        this.coordinate[1] = latitude;
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
    public Double [] getCoordinate() {
        return coordinate;
    }
    public Double[] setCoordinate(Double longitude, Double latitude) {
        this.coordinate[0] = longitude; this.coordinate[1]=latitude;
        return coordinate;
    }
}
