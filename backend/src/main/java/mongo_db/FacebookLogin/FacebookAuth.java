/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.FacebookLogin;

import com.google.gson.Gson;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import spark.utils.IOUtils;

import java.io.IOException;
import java.io.StringWriter;


public class FacebookAuth
{
    private static Gson gsonTransformer = new Gson();

    private static final String hostname = "https://graph.facebook.com";
    private static String oauthURL = "/oauth/access_token";

    private static String appID = "1661504553926840";
    private static String appSecret = "bf6c7f9daac9ed05e30b849bab507a36";

    private static String debugTokenURL = "/debug_token";
    private static String debugTokenParams = "?input_token=%s&access_token=%s";
    private static final String oauthParams = String.format( "?client_id=%s&client_secret=%s&grant_type=client_credentials", appID, appSecret );

    private static String accessToken = "";

    private static OkHttpClient client = new OkHttpClient();

    public static void getAccessToken()
    {
        okhttp3.Request req = new okhttp3.Request.Builder()
                        .url(hostname + oauthURL + oauthParams)
                        .get()
                        .build();

        System.out.println("Getting access token from facebook...");
        try
        {
            Response res = client.newCall( req ).execute();
            StringWriter writer = new StringWriter(  );
            IOUtils.copy( res.body().byteStream(), writer );
            String token = gsonTransformer.fromJson( writer.toString(), FacebookAccessTokenResponse.class ).getAccess_token();

            System.out.println("Got token: " + token);
            accessToken = token;
        }
        catch( IOException e )
        {
            e.printStackTrace();
        }

    }

    public static boolean verify( String token)
    {
        Request req = new Request.Builder()
                        .url(hostname + debugTokenURL + String.format( debugTokenParams, token, accessToken ))
                        .get()
                        .build();

        try
        {
            Response res = client.newCall( req ).execute();
            StringWriter writer = new StringWriter();
            IOUtils.copy( res.body().byteStream(), writer );

            FacebookVerifyResponseBody body = gsonTransformer.fromJson( writer.toString(),
                            FacebookVerifyResponseBody.class );
            System.out.println("Verified: " + body.isValid());
            return body.isValid();
        }
        catch( IOException e )
        {
            e.printStackTrace();
        }
        return false;
    }
}
