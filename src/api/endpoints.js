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
export const LoginSectionLink = `${url}account/details/`;
export const InvitationLink = `${url}account/many_users_invite/`;
//...........//

//LAUNCH - PROGRAM SETUP :::
export const ProfileLinkEdit = `${url}account/edit_profile/`;
export const LaunchProgramLink = `${url}app/add_program/`;
export const ProgramLogoLink = `${url}app/add_program_logo/`;
//..........//

//Dashboard - Programs ::
export const AllProgramsLink = `${url}app/programs/`;
export const ProgramDetailLink = `${url}app/program/`;
export const PointsFilterLink = `${url}app/programs?point_only=true/`;
export const ProgramDetailEdit = `${url}app/program/`;
export const TargetDeleteLink = `${url}app/program/target/`;
//........//

//Dashboard - Rewards ::
export const RewardStatLink = `${url}app/reward_stat/`;
export const RewardTableLink = `${url}app/reward/`;
//........//

//Dashboard - dashboard-component ::
export const PerformanceStatLink = `${url}app/report_stat/`;
export const BugGraphLink = `${url}app/monthly_report_stat/`;
//........//

//Dashboard - Submission ::
export const SubmissionLink = `${url}app/all_report/`;
export const SubmissionDetailLink = `${url}app/report/`;
export const SubmissionApprove = `${url}app/report_reply/`;
export const SubmissionFormLink = `${url}app/report/`;
export const MultipleFileUpload = `${url}app/file/`;
export const CommentLink = `${url}app/comment/`;
//........//

//Dashboard - Researchers ::
export const ResearchersLink = `${url}account/researchers/`;
//........//

//Dashboard - Users ::
export const UsersLink = `${url}account/user/`;
//........//

//Edit - User_Profile :::
export const UserProfileLink = `${url}account/edit_profile/`;
//.........//
