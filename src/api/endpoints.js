const url = "http://54.254.199.20/";
// const url = 'http://127.0.0.1:8000/'
// {/* /account/verify?token= */}

export const VerifyLink = `${url}account/verify?token=`;

// http://127.0.0.1:8000/account/change_password/
// Company

//USER-LOGIN API::
export const UserLoginLink = `${url}account/login/`;
export const UserRegisterLink = `${url}account/register`;
//........//

//COMPANY-PROFILE SETUP ::
export const CompanySignUpLink = `${url}account/setup/`;
export const CompanyProfileLink = `${url}account/details/`;
export const InvitationLink = `${url}account/many_users_invite/`;

//...........//

//LAUNCH - PROGRAM SETUP :::
export const LaunchProgramLink = `${url}app/add_program/`;

//..........//

//Dashboard - Programs ::
export const AllProgramsLink = `${url}app/programs/`;

//........//
