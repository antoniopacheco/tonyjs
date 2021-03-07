import { FC, useState } from 'react';
import { Trans } from 'react-i18next';
import i18n from 'i18n';
import TranslateIcon from '@material-ui/icons/Translate';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Language: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <TranslateIcon />{' '}
                <Trans i18nKey="currentLanguage.full">English</Trans>{' '}
                <ExpandMoreIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        changeLanguage('en');
                    }}
                >
                    English
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        changeLanguage('es');
                    }}
                >
                    Español
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Language;
