/*
 * Copyright (C) 2017 Nokia. All rights reserved.
 */

package mongo_db.FacebookLogin;

public class FacebookVerifyResponseBody
{
    private boolean is_valid;

    public FacebookVerifyResponseBody(){};

    public boolean isIs_valid()
    {
        return is_valid;
    }


    public void setIs_valid( boolean is_valid )
    {
        this.is_valid = is_valid;
    }
}
