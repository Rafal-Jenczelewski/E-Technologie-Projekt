package mongo_db;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class route {
    @Id
    private String id;
    private String name;
    private Boolean owned;
    private String description;
    private Boolean isPublic;

    private Double [][] coordinates;

    public route(){
    }

    public route(Double [][] coordinates, String name, Boolean owned, String description, Boolean isPublic) {
            super();
            this.coordinates = coordinates;
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

        public void setCoordinates(Double [][] coordinates){
        //this.coordinates = coordinates;
        int length = coordinates.length;
        for(int i=0; i < length; i++){
            for(int j =0;j<2;j++){
                this.coordinates[i][j] = coordinates[i][j];
            }
        }
        }
        public Double [][] getCoordinates(){
        return coordinates;
        }
}
