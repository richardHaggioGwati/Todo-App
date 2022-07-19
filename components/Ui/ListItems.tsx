//  nextjs imports
import Link from 'next/link';

// MUI Imports
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

// MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const mainListItems = (
	<>
		<Link href='./'>
			<ListItemButton>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary='Home' />
			</ListItemButton>
		</Link>

		<Link href='./doodles'>
			<ListItemButton>
				<ListItemIcon>
					<AddCircleIcon />
				</ListItemIcon>
				<ListItemText primary='Doodle' />
			</ListItemButton>
		</Link>

		<Link href='./important'>
			<ListItemButton>
				<ListItemIcon>
					<LabelImportantTwoToneIcon />
				</ListItemIcon>
				<ListItemText primary='Important' />
			</ListItemButton>
		</Link>

		<ListItemButton>
			<ListItemIcon>
				<LightModeIcon />
			</ListItemIcon>
			<ListItemText primary='Theme' />
		</ListItemButton>
	</>
);

export const secondaryListItems = (
	<>
		<ListSubheader component='div' inset>
			App info
		</ListSubheader>

		<ListItemButton>
			<ListItemIcon>
				<AccountCircleRoundedIcon />
			</ListItemIcon>
			<ListItemText primary='About us' />
		</ListItemButton>
	</>
);
