const Google = (req, res) => {
    res.render('job1', { title: 'Google Jobs' });
};
const Microsoft = (req, res) => {
    res.render('job2', { title: 'Microsoft Jobs' });
};
const Amazon = (req, res) => {
    res.render('job3', { title: 'Amazon Jobs' });
};
const Jobs = (req, res) => {
    res.render('jobs_list', {title : 'Jobs Available'})
}
module.exports = {
   Google,
   Microsoft,
   Amazon,
   Jobs
};