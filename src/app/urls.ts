export class URLS {
    private static IP = "http://perfect-impala-88.loca.lt/api";
    //private static IP = "https://restapi.localho.st/";
    public static LIST = URLS.IP + "/list_assets";
    public static CREATE = URLS.IP + "/createproduct";
    public static UpdateTemperature=URLS.IP + "/updatetemperature";
    public static UpdateLocation=URLS.IP + "/updatelocation";
    public static UpdateWeight= URLS.IP + "/updateWeight";
    public static UPDATE = URLS.IP + "update";
    public static DELETE = URLS.IP + "delete";
    public static DELETEASSET = URLS.IP + "/deleteasset";
    public static LINKEXPERIMENT = URLS.IP + "/linkExperiment"
    public static TRANSFER = URLS.IP + "/transferproduct"
  static aseets: any;
}
