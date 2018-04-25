package mongo_db;


import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import java.util.List;
import java.util.stream.Collectors;
import com.mongodb.MongoClient;


public class MongoService {

    /*
    Morphia morphia = new Morphia();
    ServerAddress addr = new ServerAddress("host", 27017);
    List<MongoCredential> credentialsList = new ArrayList<MongoCredential>();
    MongoCredential credentia = MongoCredential.createCredential(
            "username", "dbname", "password".toCharArray());
credentialsList.add(credentia);
    MongoClient client = new MongoClient(addr, credentialsList);
    Datastore datastore = morphia.createDatastore(client, "dbname");
*/


    MongoClient client = new MongoClient("localhost", 27017); //connect to mongodb
    Datastore datastore = new Morphia().createDatastore(client, "data_test"); //select shop collection

    public String addMarker(marker marker){
        datastore.save(marker);
        return marker.getId();
    }

    public String addRoute(route route){
        datastore.save(route);
        return route.getId();
    }


    public List<marker> getAllMarkers(){
        List<marker> list = datastore.find(marker.class).asList();
        if(list != null){
           // list.forEach((l)->{l.setId(l.getId().toString());});
            return list;
        }
        return null;
    }

    public List<route> getAllRoutes(){
        List<route> list = datastore.find(route.class).asList();
        if(list != null){
            // list.forEach((l)->{l.setId(l.getId().toString());});
            return list;
        }
        return null;
    }

    public List<marker> getMarkers(Boolean wartosc){
        List<marker> list = datastore.find(marker.class).asList();
        if(list != null){
            List<marker> result = list.stream()
                    .filter(p -> p.getOwned().equals(wartosc))
                    .collect(Collectors.toList());
            //result.forEach((l)-> l.setId(l.getId()));
            return result;
        }
        return null;
    }

    public List<route> getRoutes(Boolean wartosc){
        List<route> list = datastore.find(route.class).asList();
        if(list != null){
            List<route> result = list.stream()
                    .filter(p -> p.getOwned().equals(wartosc))
                    .collect(Collectors.toList());
            //result.forEach((l)-> l.setId(l.getId()));
            return result;
        }
        return null;
    }

    public void changeStatus(String id, Boolean isPublic) {
        List<marker> list = datastore.find(marker.class).asList();
        if (list != null) {
            marker a = list.stream()
                    .filter(p -> p.getId().equals(id))
                    .findFirst().get();
            //TODO update
        }
    }


}
