import search from "./../__mockup__/search.json";

export var search_profile = (search_value) => {
  try {
    return search.data.filter((s) =>
      s.name.toLowerCase().includes(search_value.toLowerCase())
    );
  } catch (error) {
    console.log("🚀 ~ fetch_patient_api_call= ~ error=>", error);

    return [];
  }
};

export var fetch_user_info =  (cid) => {
  try {
    var result = search.data.find((s) => s.cid === cid);
    console.log("🚀 ~ varfetch_user_info= ~ result=>", result)

    return result
  } catch (error) {
    console.log("🚀 ~ fetch_patient_api_call= ~ error=>", error);
    return;
  }
};
