/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.FacebookLogin;

public class FacebookAccessTokenResponse
{
    private String access_token;

    public FacebookAccessTokenResponse() {}

    public String getAccess_token()
    {
        return access_token;
    }


    public void setAccess_token( String access_token )
    {
        this.access_token = access_token;
    }
}
