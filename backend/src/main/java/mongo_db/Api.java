package mongo_db;

import static spark.Spark.*;

import com.google.gson.Gson;

public class Api {

    public static MongoService mongo = new MongoService();

    public static void main(String[] args){

        Gson testData = new Gson();
        post("/addSomeData", (req, res) -> {
            marker marker0=new marker(51.1222822, 17.060590, "marker_test_0", true, "opis_0", true);
            mongo.addMarker(marker0);
           marker marker1 = new marker (51.1845689, 51.1845689, "marker_test_1", false, "opis_1", false);
            mongo.addMarker(marker1);
            marker marker2 = new marker (51.18415689, 17.0545594, "marker_test_2", false, "opis_2", false);
            mongo.addMarker(marker2);
            marker marker3 = new marker (51.18145689, 17.0514594, "marker_test_3", true, "opis_3", false);
            mongo.addMarker(marker3);
            marker marker4 = new marker (51.18172689, 17.0514524, "marker_test_", true, "opis_4", false);
            mongo.addMarker(marker4);
            Double [][] temp = {{51.18112689, 17.0511524}, {51.18472689, 17.0714524}};
            route route1 = new route( temp, "trasa_test_0", true, "opis_0", false);
            mongo.addRoute(route1);
            Double [][] temp1 = {{51.14112689, 17.0141524}, {51.18485689, 17.0772524}};
            route route2 = new route( temp1, "trasa_test_1", true, "opis_1", false);
            mongo.addRoute(route2);
            /*4
            route.setCoordinates(new Double[][]{{21.12123, 131.123132}, {133.131, 131.2323}});
            route.setName("route_double?");
            route.setOwned(true);
            route.setDescription("opis_0");
            route.setIsPublic(true);
            res.type("application/json");
            mongo.addRoute(route);
            */
            return "example data added";
        }, testData ::toJson);



        Gson gson = new Gson();
        post("/addMarker", (req, res) -> {
            res.type("application/json");
            marker marker = gson.fromJson(req.body(), marker.class);
            return mongo.addMarker(marker);
        }, gson ::toJson);

        Gson gson_route = new Gson();
        post("/addRoute", (req, res) -> {
            res.type("application/json");
            route route = gson.fromJson(req.body(), route.class);
            return mongo.addRoute(route);
        }, gson_route ::toJson);

        Gson gson2 = new Gson();
        post("/addMarkerManual", (req, res) -> {
            marker marker = gson.fromJson(req.body(), marker.class);
            marker.setCoordinate(Double.parseDouble(req.queryParams("longitude")), Double.parseDouble(req.queryParams("latitude")));
            marker.setName(req.queryParams("name"));
            marker.setOwned(Boolean.valueOf(req.queryParams("owned")));
            marker.setDescription(req.queryParams("description"));
            marker.setIsPublic(Boolean.valueOf(req.queryParams("isPublic")));
            res.type("application/json");
            return mongo.addMarker(marker);
        }, gson2 ::toJson);

        get("/getAllMarkers", (req, res) -> {
            res.type("application/json");
            return mongo.getAllMarkers();
        }, gson ::toJson);

        get("/getAllRoutes", (req, res) -> {
            res.type("application/json");
            return mongo.getAllRoutes();
        }, gson ::toJson);

        get("/getMarkers", (req, res) -> {
            String owned = req.queryParams("owned");
            res.type("application/json");
            return mongo.getMarkers(Boolean.valueOf(owned));
        }, gson ::toJson);

        get("/getRoutes", (req, res) -> {
            String owned = req.queryParams("owned");
            res.type("application/json");
            return mongo.getRoutes(Boolean.valueOf(owned));
        }, gson ::toJson);

        put("/changeStatus", (req, res) -> {
            Boolean isPublic = Boolean.valueOf(req.queryParams("isPublic"));
            mongo.changeStatus((req.body().toString()), isPublic);
            return"";
        }, gson ::toJson);




    }
}
