export default {
  methods: {
    getYesNoStatus(value) {
      let response = null;
      if (value == 0) {
        response = "NO";
      } else if (value == 1) {
        response = "YES";
      }

      return response;
    },

    setFullnameLastnameFirst(fname, mname, lname) {
      let firstname = fname ? fname.charAt(0).toUpperCase() + fname.slice(1) : "";
      let middlename = mname ? `${mname.charAt(0).toUpperCase()}.` : "";
      let lastname = lname ? `${lname.toUpperCase()},` : "";

      return `${lastname} ${firstname} ${middlename}`
    }
  }
}
