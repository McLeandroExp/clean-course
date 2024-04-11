(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor(
      { email, role }: UserProps,
      { name, gender, birthdate }: PersonProps
    ) {
      super({ name, birthdate, gender });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor(
      { name, gender, birthdate }: PersonProps,
      { email, role }: UserProps,
      { workingDirectory, lastOpenFolder }: UserSettingsProps
    ) {
      super({ email, role }, { name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings(
    { name: "Fernando", gender: "M", birthdate: new Date("1985-10-21") },
    { email: "fernando@google.com", role: "Admin" },
    { workingDirectory: "/usr/home", lastOpenFolder: "/home" }
  );

  console.log({ userSettings });
})();
