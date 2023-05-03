import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../Theme';
import InventSummary from './InventSummary';

type Props = {};

const SaleAct = (props: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTable = useMediaQuery(theme.breakpoints.down('md'));
  const isTableUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid container spacing={2} sx={{ bgcolor: '#F5FAFE', pr: 2 }}>
      <Grid item xs={12} md={7} lg={8} sx={{ mr: 3, pb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Sales Activity
        </Typography>

        <Grid container spacing={2}>
          <Grid item zeroMinWidth xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: 2,
                borderRadius: 2,
                bgcolor: '#FFFFFF',
                p: 2,
                [theme.breakpoints.up('md')]: {
                  flexDirection: 'column',
                  // px: 3,
                },
              }}
            >
              <div>
                {isTable ? (
                  <Avatar
                    sx={{ bgcolor: '#FF5733' }}
                    aria-label="sales activity logo"
                  >
                    R
                  </Avatar>
                ) : (
                  <Typography variant="h4" sx={{ mb: 0, lineHeight: 0.8 }}>
                    456
                  </Typography>
                )}
              </div>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  [theme.breakpoints.up('md')]: {
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                    width: 'auto',
                  },
                }}
              >
                <Box
                  sx={{ ml: 3, [theme.breakpoints.up('md')]: { ml: 0 } }}
                  className="card-content"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      [theme.breakpoints.up('md')]: {
                        textAlign: 'end',
                        mr: 5.5,
                        mb: 1.5,
                        fontSize: '10px',
                      },
                    }}
                  >
                    {isTable ? 5 : 'Qty'}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#00000099',
                      [theme.breakpoints.up('md')]: {
                        fontSize: '0.675rem',
                        textTransform: 'uppercase',
                      },
                    }}
                  >
                    To Be Packed
                  </Typography>
                </Box>

                <div className="card-ations">
                  {isTable ? (
                    <IconButton sx={{ pb: 0, pl: 0 }}>
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  ) : (
                    <IconButton sx={{ pb: 0, pl: 0 }}>
                      <CheckIcon
                        sx={{ fontSize: 15, border: 1, borderRadius: 50 }}
                      />
                    </IconButton>
                  )}
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {isTableUp ? (
        <Divider
          orientation="vertical"
          sx={{
            borderWidth: 1,
            height: 'inherit',
          }}
        />
      ) : (
        ''
      )}
      <Grid item xs={12} md={4} lg={3.5} sx={{ pb: 4 }}>
        <InventSummary />
      </Grid>
    </Grid>
  );
};

export default SaleAct;
