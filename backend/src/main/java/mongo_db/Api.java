package mongo_db;

import static spark.Spark.*;

import com.google.gson.Gson;
import mongo_db.DAO.*;
import mongo_db.FacebookLogin.FacebookAuth;
import spark.Request;


public class Api
{
    private static MongoService mongo = new MongoService();
    private static Gson gsonTransformer = new Gson();

    public static void main( String[] args )
    {
        FacebookAuth.getAccessToken();

        setUpPostRequests();

        setUpGetRequests();

        setUpPutRequests();

        setUpFilters();

        System.out.println( "Server is running..." );
    }


    private static void setUpFilters()
    {
        before( ( req, res ) -> {
            System.out.println( "Received a request: " + req.url() );
            if (isProtected(req))
            {
                System.out.println("Verifing...");
                if( !FacebookAuth.verify( req.headers( "ACCESS-TOKEN" ) ) )
                {
                    halt( 401, "User is not logged in." );
                }
            }

        } );
    }

    private static boolean isProtected(Request req)
    {
        String method = req.requestMethod().toLowerCase();
        return method.equals("post") || method.equals("put");
    }

    private static void setUpPostRequests()
    {
        get( "/addSomeData", ( req, res ) -> {
            mongo.clear();

            loadExampleData();

            return "Example data added";
        }, gsonTransformer::toJson );

        post( "/addMarker", ( req, res ) -> {
            res.type( "application/json" );
            Marker marker = gsonTransformer.fromJson( req.body(), Marker.class );
            return mongo.addMarker( marker );
        }, gsonTransformer::toJson );

        post( "/addRoute", ( req, res ) -> {
            res.type( "application/json" );
            Route route = gsonTransformer.fromJson( req.body(), Route.class );
            return mongo.addRoute( route );
        }, gsonTransformer::toJson );

        post( "/addComment", ( req, res ) -> {
            res.type( "application/json" );
            Comment comment = gsonTransformer.fromJson( req.body(), Comment.class );
            return mongo.addComment( comment );
        }, gsonTransformer::toJson );
    }


    private static void setUpGetRequests()
    {
        get( "/getAllMarkers", ( req, res ) -> {
            res.type( "application/json" );
            return mongo.getAllMarkers();
        }, gsonTransformer::toJson );

        get( "/getAllRoutes", ( req, res ) -> {
            res.type( "application/json" );
            return mongo.getAllRoutes();
        }, gsonTransformer::toJson );

        get( "/getMarkers", ( req, res ) -> {
            boolean owned = Boolean.valueOf( req.queryParams( "getOthers" ) );
            Long userID = Long.valueOf( req.queryParams( "userID" ) );
            res.type( "application/json" );

            return mongo.getMarkers( owned, userID );
        }, gsonTransformer::toJson );

        get( "/getComments", ( req, res ) -> {
            String markerId = req.queryParams( "objectId" );
            res.type( "application/json" );
            return mongo.getComments( markerId );
        }, gsonTransformer::toJson );

        get( "/getRoutes", ( req, res ) -> {
            boolean owned = Boolean.valueOf( req.queryParams( "getOthers" ) );
            Long userID = Long.valueOf( req.queryParams( "userID" ) );
            res.type( "application/json" );

            return mongo.getRoutes( owned, userID );
        }, gsonTransformer::toJson );
    }


    private static void setUpPutRequests()
    {
        put( "/changeStatus", ( req, res ) -> {
            ChangeStatusReqBody body =
                            gsonTransformer.fromJson( req.body(), ChangeStatusReqBody.class );
            mongo.changeStatus( body.getId().toString(), body.isPublic() );
            return "";
        }, gsonTransformer::toJson );
    }


    private static void loadExampleData()
    {
        Marker marker = new Marker( 51.1222822, 17.060590, "Nice place!",
                        "My favourite spot for relax.", true, 1L );
        mongo.addMarker( marker );

        marker = new Marker( 51.1845689, 51.1845689, "Big tree!",
                        "Seriously, this big is freaking big.", false, 1L );
        mongo.addMarker( marker );

        marker = new Marker( 51.18415689, 17.0545594, "I like this!", "Best place for quick walk.",
                        true, 1L );
        mongo.addMarker( marker );

        marker = new Marker( 51.18145689, 17.0514594, "Best shop on Citadel!",
                        "I'm commander Shepard and this is my favourite shop on Citadel", true,
                        1L );
        mongo.addMarker( marker );

        marker = new Marker( 51.18172689, 17.0514524, "Come here", "Eveyone, you need to see this!",
                        false, 1L );
        mongo.addMarker( marker );

        Coordinates[] temp = { new Coordinates( 51.18112689, 17.0511524 ),
                               new Coordinates( 51.18472689, 17.0714524 ) };
        Route route = new Route( temp, "That's amazing!",
                        "In need of walk with nice views? Come here!", false, 1L );
        mongo.addRoute( route );

        Coordinates[] temp1 = { new Coordinates( 51.14112689, 17.0141524 ),
                                new Coordinates( 51.18485689, 17.0772524 ) };
        route = new Route( temp1, "Nice walk!", "This is really nice!", true, 1L );
        mongo.addRoute( route );
    }
}
