import Paper from '@mui/material/Paper';

const MyPaper = ({ children, className, height }) => (
    <Paper
        elevation={height}
        className={className}
        style={{ borderRadius: '16px' }}
    >
        {children}
    </Paper>
)

export default MyPaper;
