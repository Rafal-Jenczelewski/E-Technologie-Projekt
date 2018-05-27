package mongo_db;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import java.util.List;
import java.util.stream.Collectors;

import com.mongodb.MongoClient;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;


public class MongoService {
    MongoClient client = new MongoClient("localhost", 27017); //connect to mongodb
    Datastore datastore = new Morphia().createDatastore(client, "data_test"); //select shop collection

    public void clear() {
        datastore.getCollection(Marker.class).drop();
        datastore.getCollection(Route.class).drop();
    }

    public String addMarker(Marker marker) {
        datastore.save(marker);
        return marker.getId();
    }

    public String addRoute(Route route) {
        datastore.save(route);
        return route.getId();
    }

    public List<Marker> getAllMarkers() {
        List<Marker> list = datastore.find(Marker.class).asList();
        if (list != null) {
            return list;
        }
        return null;
    }

    public List<Route> getAllRoutes() {
        List<Route> list = datastore.find(Route.class).asList();
        if (list != null) {
            return list;
        }
        return null;
    }

    public List<Marker> getMarkers(boolean isGetNotOwned) {
//        if (isGetNotOwned)
//            return getAllMarkers();
//
//        List<Marker> list = datastore.find(Marker.class).asList();
//
//        if (list != null) {
//            return list.stream()
//                    .filter(p -> p.getOwned().equals(isGetNotOwned))
//                    .collect(Collectors.toList());
//        }

        return null;
    }

    public List<Route> getRoutes(boolean isGetNotOwned) {
//        if (isGetNotOwned)
//            return getAllRoutes();
//
//        List<Route> list = datastore.find(Route.class).asList();
//        if (list != null) {
//                return list.stream()
//                        .filter(p -> p.getOwned().equals(!isGetNotOwned))
//                        .collect(Collectors.toList());
//        }
        return null;
    }

    public void changeStatus(String id, Boolean isPublic) {
        Query<Marker> query = datastore.createQuery(Marker.class).field("ownerID").equal(id);
        UpdateOperations<Marker> ops = datastore.createUpdateOperations(Marker.class).set("isPublic", isPublic.toString());

        datastore.update(query, ops);
    }


}
